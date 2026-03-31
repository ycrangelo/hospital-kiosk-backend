import prisma from "../../../prismaClient.js";

export async function get(req, res) {
    const { username, password } = req.query;

    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid username or password!" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}