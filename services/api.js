import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://urnbujpromebuchuvyqj.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybmJ1anByb21lYnVjaHV2eXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxOTIzMTcsImV4cCI6MjAzMzc2ODMxN30.oLQFrCQP_Q_q5H-a1hHzOMuO4lTV54EjRdKfZWkB4jM",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybmJ1anByb21lYnVjaHV2eXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxOTIzMTcsImV4cCI6MjAzMzc2ODMxN30.oLQFrCQP_Q_q5H-a1hHzOMuO4lTV54EjRdKfZWkB4jM"
    }
})