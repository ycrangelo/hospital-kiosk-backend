import prisma from "../../../prismaClient.js";

export async function get(req, res) {
    try {
        const doctorlist = await prisma.doctorlist.findMany();
        console.log(doctorlist);        
        res.status(200).json({ message: "Doctorlist fetched successfully", doctorlist });
    } catch (error) {
        console.error("Error during get doctorlist:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}