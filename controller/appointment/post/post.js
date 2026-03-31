
import prisma from "../../../prismaClient.js";

export async function post(req, res) {
    const { fullname, birthdate, Age, newPatient, doctor, selectedDate, selectedTime, reasonForVisit, signature, privacyAct, allInformationCorrect } = req.body;

    if (!fullname || !birthdate || !Age || !newPatient || !doctor || !selectedDate || !selectedTime || !reasonForVisit || !signature || !privacyAct || !allInformationCorrect) {
        return res.status(400).json({ message: "fullname, birthdate, Age, newPatient, doctor, selectedDate, selectedTime, reasonForVisit, signature, privacyAct, and allInformationCorrect are required" });
    }

    try {
        const newAppointment = await prisma.appointment.create({
            data: {
                fullname: fullname.trim(),
                birthdate: birthdate.trim(),
                Age: Age,
                newPatient: newPatient.trim(),
                doctor: doctor.trim(),
                selectedDate: selectedDate.trim(),
                selectedTime: selectedTime.trim(),
                reasonForVisit: reasonForVisit.trim(),
                signature: signature.trim(),
                privacyAct: privacyAct.trim(),
                allInformationCorrect: allInformationCorrect.trim(),
            },
        });
            res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
    } catch (error) {
        console.error("Error during create appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}