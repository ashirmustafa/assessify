import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { sendEmail } from "@/helpers/sign-in-mailer";

connect();

export async function POST(request, response) {
    try {
        const reqBody = request.json();
        const { username, workEmail, password } = reqBody;

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        else {
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);

            const newUser = new User({
                username: username,
                workEmail: hashedPassword,
                password: hashedPassword
            });

            const savedUser = await newUser.save();
            console.log('Saved user :', savedUser);

            // send verification email
            await sendEmail({ email, emailType: "VERIFY", userId: savedUsed._id })
            return NextResponse.json({ message: "User Registered Successfully", success: true, savedUser });
        }
    } catch (error) {
        return NextResponse.json(error.message, error.status);
    }
}