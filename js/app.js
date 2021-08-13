const data = {
    "projects": {
        "Mochi": {
            "title": "Mochi",
            "description": "Discord codded in python with a Dashboard.",
            "tags": ["mochi", "discord"],
            "page": "mochi.html",
            "multi-project": true,
            "sub-projects": {
                "Mochi DiscordBot": {
                    "title": "Mochi",
                    "description": "Mochi is an open source Discord bot developed in python.",
                    "tags": ["mochi", "discord", "python"],
                    "link": {
                        "text": "Invite Mochi",
                        "uri": "https://discord.com/api/oauth2/authorize?client_id=693456698299383829&permissions=8&scope=bot"
                    },
                    "github": "https://github.com/holy-tanuki/Mochi-DiscordBot"
                },
                "Mochi Dashboard": {
                    "title": "Mochi Dashboard",
                    "tags": ["mochi", "discord", "javascript"],
                    "description": "Mochi dashboard is the open source dashboard for Mochi.",
                    "link": {
                        "text": "Mochi Dashboard",
                        "uri": "https://z1269196b-z643fcf81-gtw.qovery.io/"
                    },
                    "github": "https://github.com/holy-tanuki/Mochi-Dashboard"
                }
            }
        },
        "Twitter": {
            "title": "Twitter",
            "description": "Clone of Twitter.",
            "tags": ["javascript", "twitter"]
        },
        "Ubunty": {
            "title": "Ubunty",
            "description": "Linux distro based on Ubuntu. Ubunty fix some problems of Ubuntu.",
            "tags": ["linux", "ubunty"]
        },
        "Test": {
            "title": "Test",
            "description": "Nothing.",
            "tags": []
        }
    }
}


const urlParams = new URLSearchParams(window.location.search)

const tag = urlParams.get('tag')
let project = []

for (item in data.projects) {
    if (tag == null || data.projects[item].tags.includes(tag)) {
        project[project.length] = data.projects[item]
    }
}

project = JSON.stringify(project)
project = JSON.parse(project)


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
            projects: project,
            tag: urlParams.get('tag'),
            currentLocation: window.location
        }
    }
}
    
Vue.createApp(App).mount('#main');