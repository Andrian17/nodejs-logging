
export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Andrian") {
        throw new MyException("Exception happen");
    }else {
        return "OK";
    }
}