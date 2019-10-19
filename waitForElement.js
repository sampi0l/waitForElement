const waitForElement = (element) => {
    return new Promise((res, err) => {
        const check = setInterval(() => {
            if(document.querySelector(element) !== null) {
                clearInterval(check);
                res(document.querySelector(element));
            }
        }, 300)
    })
}
