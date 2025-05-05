const express = require('express');
const db_connection = require('./database');
const cors = require('cors');
const router = require('./routes/routes');
const role = require('./model/role');
const user = require('./model/user');

const app = express();
const port = 8001;

app.use(express.json());
app.use(cors());

app.use("/",router);

const insertrole = async () => {
    try {
        const rolesToInsert = [
            { _id: 1, role_name: 'Admin' },
            { _id: 2, role_name: 'Exhibitor' },
            { _id: 3, role_name: 'User' }
        ];

        for (const roleData of rolesToInsert) {
            const exists = await role.exists({ _id: roleData._id });
            if (!exists) {
                await role.create(roleData);
                console.log(`Inserted role: ${roleData.role_name}`);
            } else {
                console.log(`Role already exists: ${roleData.role_name}`);
            }
        }
        const admin = [
            {
                user_name: 'admin',
                user_email: 'admin@gmail.com',
                user_pass: "admin123",
                role_id: 1
            },
        ];
        
        for (const admindata of admin) {
            const exists = await user.exists({ user_name: admindata.user_name });
            if (!exists) {
                await user.create(admindata);
                console.log(`Inserted user: ${admindata.user_name}`);
            } else {
                console.log(`User already exists: ${admindata.user_name}`);
            }
        }
        

    } catch (error) {
        console.error('Error inserting roles:', error);
    }
};

insertrole();



db_connection();
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});