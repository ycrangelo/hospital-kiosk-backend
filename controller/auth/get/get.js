import prisma from "../../../prismaClient.js";

export async function postt(req, res) {
    try {
        const { username, password } = req.body; // Read from JSON body

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const user = await prisma.user.findFirst({
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