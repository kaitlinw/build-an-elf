
export var styleData = {
    'head': {
        default: {
            backgroundColor: 'orange',
            width: '200px',
            height: '200px',
            borderRadius: '50%'
        },
        actual: {
            backgroundColor: '',
            width: '',
            height: '',
            borderRadius: ''
        }
    },
    'checkpoint-1': {
        exclamation: "Hooray!",
        section: "head",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build my face!"
    },
    'eye': {
        default: {
            backgroundColor: 'white',
            width: '30px',
            height: '30px',
            borderRadius: '50%'
        },
        actual: {
            backgroundColor: '',
            width: '',
            height: '',
            borderRadius: ''
        }
    },
    'pupil': {
        default: {
            backgroundColor: 'black',
            width: '20px',
            height: '20px',
            borderRadius: '50%'
        },
        actual: {
            backgroundColor: '',
            width: '',
            height: '',
            borderRadius: ''
        }
    },
    'nose': {
        default: {
            borderLeftColor: 'orangered',
            borderLeftWidth: '20px',
            marginTop: '10px'
        },
        actual: {
            borderLeftColor: '',
            borderLeftWidth: '',
            marginTop: ''
        }
    },
    'mouth': {
        default: {
            backgroundColor: 'red',
            height: '45px',
            width: '90px',
            borderBottomLeftRadius: '90px',
            borderBottomRightRadius: '90px',
            marginTop: '17px'
        },
        actual: {
            backgroundColor: '',
            height: '',
            width: '',
            borderBottomLeftRadius: '',
            borderBottomRightRadius: '',
            marginTop: ''
        }
    },
    'checkpoint-2': {
        exclamation: "Hello World!",
        section: "face",
        message: "Hey There! I am more than just a pretty face!",
        nextStepMessage: "Let's build my body!"
    },
    'body': {
        default: {
            backgroundColor: 'green',
            width: '200px',
            height: '260px',
            borderRadius: '50em'
        },
        actual: {
            backgroundColor: '',
            width: '',
            height: '',
            borderRadius: ''
        }
    },
    'belt': {
        default: {
            backgroundColor: 'rgb(25, 25, 25)',
            height: '38px',
            width: '200px',
            marginTop: '120px'

        },
        actual: {
            backgroundColor: '',
            height: '',
            width: '',
            marginTop: ''
        }
    },
    'buckle': {
        default: {
            border: '10px solid gold',
            width: '40px',
            minHeight: '38px',
            margin: 'auto'
        },
        actual: {
            border: '',
            width: '',
            minHeight: '',
            margin: ''
        }
    },
    'checkpoint-3': {
        exclamation: "Alright!",
        section: "body",
        message: "But I need some legs for dancing... I mean, moving gifts!",
        nextStepMessage: "Let's build my legs!"
    },
    'leg': {
        default: {
            backgroundColor: 'green',
            width: '40px',
            height: '200px'
        },
        actual: {
            backgroundColor: '',
            width: '',
            height: ''
        }
    },
    'feet': {
        default: {
            backgroundColor: 'rgb(25, 25, 25)',
            height: '50px',
            width: '90px',
            borderRadius: '40em',
            marginTop: '-20px'
        },
        actual: {
            backgroundColor: '',
            height: '',
            width: '',
            borderRadius: '',
            marginTop: ''
        }
    },
    'checkpoint-4': {
        exclamation: "Yipee!",
        section: "legs",
        message: "Alright! Now I can dance! But I'll need some arms if I am going to carry any gifts!",
        nextStepMessage: "Let's build my arms!"
    },
    'arm': {
        default: {
            backgroundColor: 'green',
            height: '220px',
            width: '50px',
            borderRadius: '100px'
        },
        actual: {
            backgroundColor: '',
            height: '',
            width: '',
            borderRadius: ''
        }
    },
    'left-arm': {
        default: {
            transform: 'rotate(42deg)'
        },
        actual: {
            transform: ''
        }
    },
    'right-arm': {
        default: {
            transform: 'rotate(-42deg)'
        },
        actual: {
            transform: ''
        }
    },
    'hand': {
        default: {
            backgroundColor: 'orange',
            width: '50px',
            height: '50px',
            borderRadius: '50%'
        },
        actual: {
            width: '',
            height: '',
            borderRadius: '',
            backgroundColor: ''
        }
    },
    'checkpoint-5': {
        exclamation: "Great!",
        section: "arms",
        message: "Great! I'm almost ready to go! I still need some hair and a hat if I want to look the part!",
        nextStepMessage: "Let's build my hair and hat!"
    },
    'hair': {
        default: {
            backgroundColor: 'brown',
            height: '200px',
            width: '200px',
            borderRadius: '50%'
        },
        actual: {
            backgroundColor: '',
            height: '',
            width: '',
            marginBottom: '',
            borderRadius: ''
        }
    },
    'hat-head': {
        default: {
            borderBottomColor: 'green'

        },
        actual: {
            borderBottomColor: ''
        }
    },
    'pom-pom': {
        default: {
            backgroundColor: 'white',
            height: '50px',
            width: '50px',
            borderRadius: '50%'
        },
        actual: {
            backgroundColor: '',
            height: '',
            width: '',
            borderRadius: ''
        }
    },
    'hat-band': {
        default: {
            backgroundColor: 'white',
            height: '40px',
            width: '200px',
            borderRadius: '90px'
        },
        actual: {
            backgroundColor: '',
            height: '',
            width: '',
            borderRadius: ''
        }
    },
    'checkpoint-6': {
        exclamation: "I'm ready to go!",
        section: "arms",
        message: "Check me out! Wow I look good.",
        nextStepMessage: "Alright, time to put me into a Christmas card so you can show me off to your friends and family!"
    },

    'build-card': {
        name: "",
        yourMessage: "",
        message: "",
        yourName: "",
        elfName: ""
    },
    'share': {
        exclamation: "Merry Christmas!",
        message: "Send me to your family and friends!"
    }
}

export var steps = Object.keys(styleData)


export var cardData = {}



// export var steps = ['head', 'checkpoint', 'eye', 'pupil', 'nose', 'mouth', 'checkpoint', 'body', 'belt', 'buckle', 'checkpoint', 'leg', 'feet', 'checkpoint', 'arm', 'left-arm', 'right-arm', 'hand', 'checkpoint', 'hair', 'hat-head', 'pom-pom', 'hat-band', 'completed-elf', 'make-card', 'share']
