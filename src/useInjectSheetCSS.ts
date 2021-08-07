import useHeadStyleInjection from "react-use-head-style-injection"

const useInjectSheetCSS = useHeadStyleInjection(
    '__react-sheet-presentation',
    `
    .__rsp-shadow {

    }

    .__rsp-sheet {

    }

    .__rsp-sheet > * {
        min-height: 100%;
    }
    `)

export default useInjectSheetCSS
