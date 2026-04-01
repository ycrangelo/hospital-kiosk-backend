
import prisma from "../../../prismaClient.js";

export async function post(req, res) {
    const { location, map, directions } = req.body;

    if (!location) {
        return res.status(400).json({ message: "location, map, and directions are required" });
    }

    try {
        const newLocation = await prisma.location.create({
            data: {
                location: location.trim(),
                map: map.trim(),
                directions: directions.trim(),
            },
        });
            res.status(201).json({ message: "Location created successfully", location: newLocation });
    } catch (error) {
        console.error("Error during create location:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}