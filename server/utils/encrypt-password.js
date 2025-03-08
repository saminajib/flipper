    import bcrypt from 'bcrypt';
    
    // Generate password
    export async function hashPassword(userPassword) {
        const salt = await bcrypt.genSalt(12);
        console.log(salt);
        const passwordHash = await bcrypt.hash(userPassword, salt);
        return passwordHash;
    }

    // ComparePassword
    export async function comparePassword(userPassword, passwordHash) {
        const result = await bcrypt.compare(userPassword, passwordHash);
        return result;
    }