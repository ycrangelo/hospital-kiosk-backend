import prisma from "../../../prismaClient.js";

export async function get(req, res) {     
    try {
        const { doctor } = req.body; // Read from JSON body
        if (!doctor) {
            return res.status(400).json({ message: "Doctor is required" });
        }

        const appointments = await prisma.appointment.findMany({
            where: { doctor: doctor.trim() },
        });

        res.status(200).json({ message: "Appointments fetched successfully", appointments });
    } catch (error) {
        console.error("Error during get appointments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
} 