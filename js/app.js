const data = {
    "projects": {
        "mochi-discordbot": {
            "title": "Mochi DiscordBot",
            "description": "Mochi is an open source Discord bot developed in python.",
            "tags": ["mochi", "discord", "python"],
            "github": "https://github.com/holy-tanuki/Mochi-DiscordBot"
        },
        "mochi-dashboard": {
            "title": "Mochi Dashboard",
            "tags": ["mochi", "discord", "javascript"],
            "description": "Mochi dashboard is the open source dashboard for Mochi.",
            "link": "https://z1269196b-z643fcf81-gtw.qovery.io/",
            "github": "https://github.com/holy-tanuki/Mochi-Dashboard"
        }
    }
}

fetch("https://raw.githubusercontent.com/holy-tanuki/holy-tanuki/main/README.md")
.then(data => data.text())
.then(function(mdText) {
    const md = new Remarkable();
    md.set({
        html: true
    });

    const readme = md.render(mdText)
    $('#readme').append(readme)
})

const App = {
    data() {
        return {
            projects: data.projects,
        }
    }
}
    
Vue.createApp(App).mount('#main');