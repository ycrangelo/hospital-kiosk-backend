import prisma from "../../../prismaClient.js";

export async function get(req, res) {
    try {
        const locations = await prisma.location.findMany();

        res.status(200).json({ message: "Locations fetched successfully", locations });
    } catch (error) {
        console.error("Error during get locations:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}