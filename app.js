(function () {
    const polli = window.PolliClient;
    const el = (id) => document.getElementById(id);

    // BYOP: scoped key from the official <polli-connect> widget (consent flow).
    function getKey() {
        const c = document.querySelector("polli-connect");
        return (c && c.apiKey) || sessionStorage.getItem("polli_byop_key") || "";
    }

    el("go").addEventListener("click", async () => {
        const topic = el("topic").value.trim();
        const apiKey = getKey();
        if (!topic) { el("status").textContent = "Type a topic first"; el("status").className = "err"; return; }
        if (!apiKey) { el("status").textContent = "Approve a Pollinations key with the Connect button first — it costs your own Pollen, 5 max."; el("status").className = "err"; return; }
        try {
            el("go").disabled = true;
            el("haiku").textContent = "";
            el("imgWrap").innerHTML = "";
            el("download").hidden = true;
            el("status").textContent = "Asking the Polli LLM to write a haiku...";
            el("status").className = "";
            const haiku = await polli.chatCompletion(
                "Write a haiku (3 lines, 5-7-5 syllables) about: " + topic + ". Reply with only the haiku, no extra text.",
                { apiKey, maxTokens: 120 },
            );
            el("haiku").textContent = haiku;
            el("status").textContent = "Haiku done. Illustrating with the Polli image model...";
            const blob = await polli.generateImage(
                "Minimalist illustration for a haiku, atmospheric, soft colors: " + topic,
                { apiKey, width: 512, height: 512 },
            );
            const url = URL.createObjectURL(blob);
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Polli illustration";
            el("imgWrap").appendChild(img);
            const dl = el("download");
            dl.href = url;
            dl.hidden = false;
            el("status").textContent = "Done — haiku by the Polli LLM, art by the Polli image model ✅";
            el("status").className = "ok";
        } catch (err) {
            el("status").textContent = err.message;
            el("status").className = "err";
        } finally {
            el("go").disabled = false;
        }
    });
})();
