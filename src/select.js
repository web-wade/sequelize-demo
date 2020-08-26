const { Blog, User } = require('./model');

!(async function () {
    // const zhangsan = await User.findOne({
    //     where: {
    //         userName: 'lisi',
    //     },
    // });
    // console.log(zhangsan.dataValues);

    // const zhangsanName = await User.findOne({
    //     attributes: ['userName'],
    //     where: {
    //         userName: 'lisi',
    //     },
    // });
    // console.log(zhangsanName.dataValues);

    // const zhangsanBlog = await Blog.findAll({
    //     where: {
    //         userId: 1,
    //     },
    //     order: [['id', 'desc']],
    // });
    // console.log(zhangsanBlog.map((item) => item.dataValues));

    // const zhangsanBlog = await Blog.findAll({
    //     // where: {
    //     //     userId: 1,
    //     // },
    //     limit: 2,
    //     offset: 1,
    //     order: [['id', 'desc']],
    // });
    // console.log(zhangsanBlog.map((item) => item.dataValues));

    // const zhangsanBlog = await Blog.findAndCountAll({
    //     // where: {
    //     //     userId: 1,
    //     // },
    //     limit: 2,
    //     offset: 1,
    //     order: [['id', 'desc']],
    // });
    // console.log(zhangsanBlog.rows.map((item) => item.dataValues));
    // console.log(zhangsanBlog.count);

    const blogListWithUser = await Blog.findAndCountAll({
        order: [['id', 'desc']],
        include: [
            {
                model: User,
                attributes: ['userName', 'nickName'],
                where: {
                    userName: 'zhangsan',
                },
            },
        ],
    });
    console.log(
        blogListWithUser.count,
        blogListWithUser.rows.map((item) => item.dataValues)
    );
})();
