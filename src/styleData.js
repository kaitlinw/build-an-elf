
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
        nextStepMessage: "Let's build the face!"
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
        exclamation: "Hooray!",
        section: "face",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build the face!"
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
        exclamation: "Hooray!",
        section: "body",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build the face!"
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
        exclamation: "Hooray!",
        section: "legs",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build the face!"
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
        exclamation: "Hooray!",
        section: "arms",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build the face!"
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
    'completed-elf': {
        exclamation: "Hooray!",
        section: "arms",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build the face!"
    },
    'build-card': {
        exclamation: "Hooray!",
        section: "arms",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build the face!"
    },
    'share': {
        exclamation: "Hooray!",
        section: "arms",
        message: "Hmm... looks more like a fried egg yolk to me!",
        nextStepMessage: "Let's build the face!"
    },
}

export var steps = Object.keys(styleData)


export var cardData = {}



// export var steps = ['head', 'checkpoint', 'eye', 'pupil', 'nose', 'mouth', 'checkpoint', 'body', 'belt', 'buckle', 'checkpoint', 'leg', 'feet', 'checkpoint', 'arm', 'left-arm', 'right-arm', 'hand', 'checkpoint', 'hair', 'hat-head', 'pom-pom', 'hat-band', 'completed-elf', 'make-card', 'share']
