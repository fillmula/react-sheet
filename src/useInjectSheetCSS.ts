import useHeadStyleInjection from "react-use-head-style-injection"

const useInjectSheetCSS = useHeadStyleInjection(
    '__react-sheet-presentation',
    `
    @keyframes __rsp-shadow-reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes __rsp-shadow-hide {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes __rsp-reveal-from-bottom {
        0% {
            transform: translate(0, 100%);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes __rsp-hide-to-bottom {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, 100%);
        }
    }

    @keyframes __rsp-reveal-from-top {
        0% {
            transform: translate(0, -100%);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes __rsp-hide-to-top {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, -100%);
        }
    }

    @keyframes __rsp-reveal-from-left {
        0% {
            transform: translate(-100%, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes __rsp-hide-to-left {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-100%, 0);
        }
    }

    @keyframes __rsp-reveal-from-right {
        0% {
            transform: translate(100%, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes __rsp-hide-to-right {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(100%, 0);
        }
    }

    .__rsp-shadow {

    }

    .__rsp-sheet {

    }

    .__rsp-sheet > * {
        min-height: 100%;
    }

    .__rsp-shadow.__rsp-enter {
        animation: 0.3s ease-in-out 0s __rsp-shadow-reveal forwards;
    }

    .__rsp-shadow.__rsp-leave {
        animation: 0.3s ease-in-out 0s __rsp-shadow-hide forwards;
    }

    .__rsp-sheet.__rsp-enter {
        animation: 0.3s ease-in-out 0s __rsp-reveal-from-bottom forwards;
    }

    .__rsp-sheet.__rsp-leave {
        animation: 0.3s ease-in-out 0s __rsp-hide-to-bottom forwards;
    }

    .__rsp-sheet.__rsp-enter.__rsp-direction-bottom {
        animation: 0.3s ease-in-out 0s __rsp-reveal-from-bottom forwards;
    }

    .__rsp-sheet.__rsp-leave.__rsp-direction-bottom {
        animation: 0.3s ease-in-out 0s __rsp-hide-to-bottom forwards;
    }

    .__rsp-sheet.__rsp-enter.__rsp-direction-top {
        animation: 0.3s ease-in-out 0s __rsp-reveal-from-top forwards;
    }

    .__rsp-sheet.__rsp-leave.__rsp-direction-top {
        animation: 0.3s ease-in-out 0s __rsp-hide-to-top forwards;
    }

    .__rsp-sheet.__rsp-enter.__rsp-direction-left {
        animation: 0.3s ease-in-out 0s __rsp-reveal-from-left forwards;
    }

    .__rsp-sheet.__rsp-leave.__rsp-direction-left {
        animation: 0.3s ease-in-out 0s __rsp-hide-to-left forwards;
    }

    .__rsp-sheet.__rsp-enter.__rsp-direction-right {
        animation: 0.3s ease-in-out 0s __rsp-reveal-from-right forwards;
    }

    .__rsp-sheet.__rsp-leave.__rsp-direction-right {
        animation: 0.3s ease-in-out 0s __rsp-hide-to-right forwards;
    }
    `)

export default useInjectSheetCSS
