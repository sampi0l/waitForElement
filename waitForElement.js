const waitForElement = (element) => {
    return new Promise((res, err) => {
        const check = setInterval(() => {
            if([...document.querySelectorAll(element)] !== []) {
                clearInterval(check);
                res(document.querySelectorAll(element));
            }
        }, 300)
    })
}
