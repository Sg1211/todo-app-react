export const fetchData = (data, timeout, errorProbability = 0) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            //const isErrored = hasError(errorProbability);

            // if (isErrored) {
            //     reject(new Error('Failed to fetch data'));                
            //     return;
            // }

            resolve(data);
        }, timeout);
    });