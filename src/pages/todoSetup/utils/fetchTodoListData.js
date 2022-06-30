const hasError = errorProbability => {
    const probability = Math.random();
    const isErrored = probability <= errorProbability;
    return isErrored;
  };

const triggerFetchDataFailure = reject => {
    reject(new Error('Failed to fetch data'));
  };

const triggerFetchDataSuccess = (resolve, data) => {
    resolve(data);
  };

const fetchTodoListData = (data, timeout, errorProbability = 0) =>
new Promise((resolve, reject) => {
    setTimeout(() => {
      const isErrored = hasError(errorProbability);
      if (isErrored) {
        triggerFetchDataFailure(reject);
        return;
      }
      triggerFetchDataSuccess(resolve, data);
    }, timeout);
    });

export default fetchTodoListData;