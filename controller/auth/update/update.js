import prisma from "../../../prismaClient.js";

export default async function update(req, res) {
    const { username, password, name } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        const updatedUser = await prisma.user.update({
            where: { username },
            data: {
                password,
                name
            },
        });

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error during update:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}