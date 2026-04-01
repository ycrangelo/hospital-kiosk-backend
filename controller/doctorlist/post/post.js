
import prisma from "../../../prismaClient.js";

export async function post(req, res) {
    const { doctorname, department, occupiedDate } = req.body;

    if (!doctorname || !department || !occupiedDate) {
        return res.status(400).json({ message: "doctorname, department, and occupiedDate are required" });
    }
        
    try {
            const newDoctorlist = await prisma.doctorlist.create({
            data: {
                doctorname: doctorname.trim(),
                department: department.trim(),
                occupiedDate: occupiedDate ? occupiedDate : [],
            },
        });
                res.status(201).json({ message: "Doctorlist created successfully", doctorlist: newDoctorlist });
    } catch (error) {
        console.error("Error during create doctorlist:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}