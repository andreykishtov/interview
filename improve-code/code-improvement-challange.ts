class UserService {
  private users: any[] = [];

  async getUser(id: any) {
    try {
      const user = await fetch(`/api/users/${id}`);
      return user.json();
    } catch (e) {
      console.log("Error fetching user:", e);
      return null;
    }
  }

  async saveUser(userData: any, uId: any) {
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
        //return Uid;
      }
    } else {
      throw Error("this userDada on this uId");
    }
  }
}
