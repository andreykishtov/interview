class UserService {
  private users: any[] = [];

  async getUser(id: string) {
    if (id) {
      try {
        const user = await fetch(`/api/users/${id}`);
        return user.json();
      } catch (e) {
        console.log("Error fetching user:", e);
        return null;
      }
    }
    console.log("id is empty or not exist ");
    return null;
  }

  async saveUser(userData: UserData) {
    if (userData) {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify(userData),
        });
        const result = await response.json();
        return result;
      } catch (e) {
        console.log("Error saving user:", e);
        return false;
      }
    }
    console.log("id is empty or not exist ");
    return false;
  }
}
