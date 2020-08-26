const { Blog, User } = require('./model');

!(async function () {
    // const updateRes = await Blog.destroy({
    //     where: {
    //         id: 4,
    //     },
    // });
    // console.log(updateRes);
    const updateRes = await User.destroy({
        where: {
            id: 1,
        },
    });
    console.log(updateRes);
})();
