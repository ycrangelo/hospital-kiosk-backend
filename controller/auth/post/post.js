import prisma from "../../../prismaClient.js";

export async function post(req, res) {
    const { username, password, name } = req.body;

    if (!username || !password || !name) {
        return res.status(400).json({ message: "username, password, and name are required" });
    }

    try {
        const user = await prisma.user.findFirst({
            where: { username: username.trim() },
        });

        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }
        const newUser = await prisma.user.create({
            data: {
                username: username.trim(),
                password,
                name: name.trim(),
            },
        });
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error during register:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}














