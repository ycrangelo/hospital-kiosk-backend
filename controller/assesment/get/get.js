import prisma from "../../../prismaClient.js";

export async function get(req, res) {     
    try {
        const assesment = await prisma.assesment.findMany();

        res.status(200).json({ message: "Assesments fetched successfully", assesment });
    } catch (error) {
        console.error("Error during get assesment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
} 