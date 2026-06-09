// Mock user database with demo users
const users = [
  {
    id: 1,
    email: "demo@luxestay.com",
    password: "Demo@123456",
    name: "Demo User",
    verified: true
  },
  {
    id: 2,
    email: "john@luxestay.com",
    password: "John@123456",
    name: "John Doe",
    verified: true
  },
  {
    id: 3,
    email: "sarah@luxestay.com",
    password: "Sarah@123456",
    name: "Sarah Smith",
    verified: true
  },
  {
    id: 4,
    email: "admin@luxestay.com",
    password: "Admin@123456",
    name: "Admin User",
    verified: true
  }
];

export const authService = {
  // Simulate email verification (in real app, would send email)
  sendVerificationEmail: (email) => {
    console.log(`Verification email sent to ${email}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Verification code sent to your email",
          verificationCode: "123456" // Demo code
        });
      }, 1000);
    });
  },

  // Verify email with code
  verifyEmail: (email, code) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In demo, any code starting with "1" is valid
        if (code === "123456" || code.startsWith("1")) {
          resolve({ success: true, message: "Email verified successfully" });
        } else {
          resolve({ success: false, message: "Invalid verification code" });
        }
      }, 500);
    });
  },

  // Login user
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          const userData = {
            id: user.id,
            email: user.email,
            name: user.name,
            verified: user.verified,
            loginTime: new Date().toISOString()
          };
          resolve(userData);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 800);
    });
  },

  // Sign up new user
  signup: (email, password, name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if user already exists
        if (users.find((u) => u.email === email)) {
          reject(new Error("Email already registered"));
          return;
        }

        // Add new user
        const newUser = {
          id: users.length + 1,
          email,
          password,
          name,
          verified: false
        };
        users.push(newUser);

        resolve({
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          verified: newUser.verified
        });
      }, 800);
    });
  },

  // Get all users (for demo purposes)
  getAllUsers: () => {
    return users.map(({ id, email, name, verified }) => ({
      id,
      email,
      name,
      verified
    }));
  }
};
