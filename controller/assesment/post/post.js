
import prisma from "../../../prismaClient.js";

export async function post(req, res) {
    const { symptom, whenDidItStart, painLevel, typeOfPain, doesItSpreadTo, otherSymtoms } = req.body;

    if (!symptom || !whenDidItStart || !painLevel || !typeOfPain || !doesItSpreadTo || !otherSymtoms) {
        return res.status(400).json({ message: "symptom, whenDidItStart, painLevel, typeOfPain, doesItSpreadTo, and otherSymtoms are required" });
    }

    try {
        const newAssesment = await prisma.assesment.create({
            data: {
                symptom: symptom.trim(),
                whenDidItStart: whenDidItStart.trim(),
                painLevel: painLevel,
                typeOfPain: typeOfPain.trim(),
                doesItSpreadTo: doesItSpreadTo.trim(),
                otherSymtoms: otherSymtoms.trim(),
            },
        });
            res.status(201).json({ message: "Assesment created successfully", assesment: newAssesment });
    } catch (error) {
        console.error("Error during create assesment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}