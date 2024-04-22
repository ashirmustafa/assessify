import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


connect();


export async function POST(request) {

  const { username, workEmail, password } = await request.json();
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  var new_user = new User({
    username: username,
    workEmail: workEmail,
    password: hashedPassword
  });

  const hashedVerifyToken = bcrypt.hashSync(new_user._id.toString(), salt);
  new_user.verifyToken = hashedVerifyToken;
  new_user.verifyTokenExpiry = Date.now() + 3600000;
  try {
    await new_user.save();
    console.log('User: ' + username + ' saved successfully!');
    return NextResponse.json(new_user);
  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json('error', error);

  }
}
