export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Verify Your Email</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  </head>
  <body style="margin: 0; font-family: Arial, sans-serif; font-size: 14px">
    <div style="max-width: 580px; margin: 0 auto; padding: 15px">
      <main>
        <div style="margin: 0; padding: 40px 32px; background: #1e1e1e; border-radius: 10px; text-align: center;">
          <div style="width: 100%; max-width: 489px; margin: 0 auto">
            <h1 style="margin: 0; font-size: 30px; font-weight: 500; color: #f9fafb;">Verify Your Email</h1>
            <p style=" margin: 0; margin-top: 17px; font-weight: 300; letter-spacing: 0.4px; color: #a1a1aa;">
              Hey <span style="font-weight: 500">{firstName}</span>, welcome to
              Coderoom Playground. Use the following OTP to verify your email
              address. This OTP is valid only for
              <span style="font-weight: 500">5 minutes</span>. Please do not
              share this code with others.
            </p>
            <p style=" margin-top: 30px; margin-bottom: 30px; font-size: 48px; font-weight: 600; color: rgb(255, 187, 0); letter-spacing: 0.4px;">
              {OTP}
            </p>
            <p style="max-width: 400px; margin: 0 auto; text-align: center; font-weight: 300; letter-spacing: 0.4px;  color: #a1a1aa;">
              Need help? Ask at
              <a href="mailto:coderoom.playground@gmail.com" style="color: #00bef3; text-decoration: none">coderoom.playground@gmail.com</a>
            </p>
            <div style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #323232;">
              <p style="margin: 0; margin-top: 20px; font-size: 20px; font-weight: 400; color: rgb(255, 187, 0);">Coderoom Playground</p>
              <p style="margin: 0; margin-top: 10px; color: #a1a1aa; font-size: 11px;">Copyright © 2024 Coderoom. All rights reserved.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
`;

export const RESET_PASSWORD_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Reset Your Password</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  </head>
  <body style="margin: 0; font-family: Arial, sans-serif; font-size: 14px">
    <div style="max-width: 580px; margin: 0 auto; padding: 15px">
      <main>
        <div style="margin: 0; padding: 40px 32px; background: #1e1e1e; border-radius: 10px; text-align: center;">
          <div style="width: 100%; max-width: 489px; margin: 0 auto">
            <h1 style="margin: 0; font-size: 30px; font-weight: 500; color: #f9fafb;">Reset Your Password</h1>
            <p style=" margin: 0; margin-top: 17px; font-weight: 300; letter-spacing: 0.4px; color: #a1a1aa;">
                Hey <span style="font-weight: 500">{firstName}</span>, We have received a request to reset your password. If you didn't make this request, please ignore this email. To reset your password, click the button below</p>
            </p>
            <p style=" margin-top: 48px; margin-bottom: 48px; font-size: 16px; color: rgb(255, 187, 0); letter-spacing: 0.4px;">
              <a href="{resetURL}" style="font-family:Helvetica, sans-serif ;background-color: rgb(255, 187, 0); color: #2a2a2a; padding: 12px 20px; text-decoration: none; border-radius: 5px; ">Reset Password</a>
            </p>
            <p style="max-width: 400px; margin: 0 auto; text-align: center; font-weight: 300; letter-spacing: 0.4px;  color: #a1a1aa;">
              Need help? Ask at
              <a href="mailto:coderoom.playground@gmail.com" style="color: #00bef3; text-decoration: none">coderoom.playground@gmail.com</a>
            </p>
            <div style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #323232;">
              <p style="margin: 0; margin-top: 20px; font-size: 20px; font-weight: 400; color: rgb(255, 187, 0);">Coderoom Playground</p>
              <p style="margin: 0; margin-top: 10px; color: #a1a1aa; font-size: 11px;">Copyright © 2024 Coderoom. All rights reserved.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
`;

export const WELCOME_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Welcome to Coderoom</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  </head>
  <body style="margin: 0; font-family: Arial, sans-serif; font-size: 14px">
    <div style="max-width: 580px; margin: 0 auto; padding: 15px">
      <main>
        <div style="margin: 0; padding: 40px 32px; background: #1e1e1e; border-radius: 10px; text-align: center;">
          <div style="width: 100%; max-width: 489px; margin: 0 auto">
            <h1 style="margin: 0; font-size: 30px; font-weight: 500; color: #f9fafb;">Welcome to Coderoom</h1>
            <p style=" margin: 0; margin-top: 17px; font-weight: 300; letter-spacing: 0.4px; color: #a1a1aa;">
                Hey <span style="font-weight: 500">{firstName}</span>, Thankyou for choosing Coderoom Playground. Click on the below button to explore more.</p>
            </p>
            <p style=" margin-top: 48px; margin-bottom: 48px; font-size: 16px; color: rgb(255, 187, 0); letter-spacing: 0.4px;">
              <a href="http://localhost:5173/" style="font-family:Helvetica, sans-serif ;background-color: rgb(255, 187, 0); color: #2a2a2a; padding: 12px 20px; text-decoration: none; border-radius: 5px; ">Explore</a>
            </p>
            <p style="max-width: 400px; margin: 0 auto; text-align: center; font-weight: 300; letter-spacing: 0.4px;  color: #a1a1aa;">
              Need help? Ask at
              <a href="mailto:coderoom.playground@gmail.com" style="color: #00bef3; text-decoration: none">coderoom.playground@gmail.com</a>
            </p>
            <div style="width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #323232;">
              <p style="margin: 0; margin-top: 20px; font-size: 20px; font-weight: 400; color: rgb(255, 187, 0);">Coderoom Playground</p>
              <p style="margin: 0; margin-top: 10px; color: #a1a1aa; font-size: 11px;">Copyright © 2024 Coderoom. All rights reserved.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
`;
