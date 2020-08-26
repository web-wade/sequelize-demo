const { Blog, User } = require('./model');

!(async function () {
    const zhangsan = await User.create({
        userName: 'zhangsan',
        password: '123',
        nickName: '张三',
    });

    const zhangsanId = zhangsan.dataValues.id;

    const lisi = await User.create({
        userName: 'lisi',
        password: '123',
        nickName: '李四',
    });

    const lisiId = lisi.dataValues.id;

    const blog1 = await Blog.create({
        title: '标题1',
        content: '内容以',
        userId: zhangsanId,
    });
    const blog2 = await Blog.create({
        title: '标题2',
        content: '内容2',
        userId: zhangsanId,
    });
    const blog3 = await Blog.create({
        title: '标题3',
        content: '内容3',
        userId: lisiId,
    });
    const blog4 = await Blog.create({
        title: '标题4',
        content: '内容4',
        userId: lisiId,
    });
})();
