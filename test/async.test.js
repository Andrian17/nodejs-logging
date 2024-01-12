import { RequestName } from "../src/async_test";

test.concurrent("Async unit test", async () => {
    const result = await RequestName("Andrian");
    expect(result).toEqual({
        message: "success",
        code: 200
    });
});

test.concurrent("Async unit test2", async () => {
    await expect(RequestName("Andrian")).resolves.toEqual({
        message: "success",
        code: 200
    });

    await expect(RequestName("Cimen")).rejects.not.toEqual({
        message: "success",
        code: 200
    });

    await expect(RequestName("Cimen")).rejects.toEqual({
        message: "failed",
        code: 404
    });
});


