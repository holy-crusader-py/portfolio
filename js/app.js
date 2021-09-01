const data = {
    "projects": {
        "mochi-discordbot": {
            "title": "Mochi DiscordBot",
            "description": "Mochi is an open source Discord bot developed in python.",
            "tags": ["mochi", "discord", "python"],
            "link": "https://z1269196b-z643fcf81-gtw.qovery.io/"
        },
        "mochi-dashboard": {
            "title": "Mochi Dashboard",
            "tags": ["mochi", "discord", "javascript"],
            "description": "Mochi dashboard is the open source dashboard for Mochi.",
            "link": "https://z1269196b-z643fcf81-gtw.qovery.io/"
        },
        "rocc": {
            "title": "Rocc",
            "tags": ["rocc", "python"],
            "description": "Rocc is a tool in python to create a beautiful image of your code.",
            "link": "https://github.com/holy-tanuki/Rocc"
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

const emojis = [
	'😄','😃','😀','😊','😍','😘','😚','😗','😋','😏','😸','😻','😽','👹','👺','🙈','🙉','🙊','🔥','✨','🌟','💥','💢','💧','💤','👂','👀','👃','👅','👄','👊','✋','💪','🌂','💛','💙','💜','💚','❤','💓','💎','💬','💭','🐧','🐦','🐤','🐥','🐣','🐔','🎉','🎊','🔆','🔅','🎵','🎶','🎺','🎷','👾','🎮','🍵','🍼','🍺','🍻','🍪','🍑','🗾','🚲','🚏','🎫','🚦','🚥','🚧','⛽','🏮','🗿','🎪','🎭','📍','🔞','💯'
]

$('#emoji').html(emojis[Math.floor(Math.random() * emojis.length)])
$('#emoji').on('click', function() {
    $(this).html(emojis[Math.floor(Math.random() * emojis.length)])
})

const App = {
    data() {
        return {
            projects: data.projects,
            changeEmoji: function() {
                console.log(self);
                return emojis[Math.floor(Math.random() * emojis.length)];
            }
        }
    }
}
    
Vue.createApp(App).mount('#main');
