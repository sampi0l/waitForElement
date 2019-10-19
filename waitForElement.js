const waitForElement = (element) => {
    return new Promise((res, err) => {
        const check = setInterval(() => {
            if(document.querySelectorAll(element).length !== 0) {
                clearInterval(check);
                res(document.querySelectorAll(element));
            }
        }, 300)
    })
}
