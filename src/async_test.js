
export const RequestName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name == "Andrian") {
                resolve({
                    message: "success",
                    code: 200
                });
            } else {
                reject({
                    message: "failed",
                    code: 404
                });
            }
        }, 1000);
    });
}