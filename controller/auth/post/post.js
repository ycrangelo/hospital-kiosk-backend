import prisma from "../../../prismaClient.js";

export async function post(req, res) {
    const { username, password,name } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if ( user) {
            return res.status(401).json({ message: "already created this user!" });
        }
        const newUser = await prisma.user.create({
            data: {
                username,
                password,
                name
            },
        });
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}   