export function ignoreActErrors() {
    // this is just a little hack to silence a warning that we'll get until react
    // fixes this: https://github.com/facebook/react/pull/14853
    // eslint-disable-next-line no-console
    const originalError = console.error
    beforeAll(() => {
        // eslint-disable-next-line no-console
        console.error = (...args) => {
            if(/Warning.*not wrapped in act/.test(args[0])) {
                return
            }
            originalError.call(console, ...args)
        }
    })

    afterAll(() => {
        // eslint-disable-next-line no-console
        console.error = originalError
    })
}

export function sleep(ms = 250) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
