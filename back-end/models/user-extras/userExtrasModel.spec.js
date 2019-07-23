const userExtrasModel = require("./userExtrasModel");
const db = require("../../data/dbConfig");

describe("environment", () => {
  it("environment should be testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("insert", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await db("projects").truncate();
    await db("education").truncate();
    await db("experience").truncate();
  });
  afterEach(async () => {
    await db("users").truncate();
    await db("projects").truncate();
    await db("education").truncate();
    await db("experience").truncate();
  });

  it("should insert user extra", async () => {
    await db("users").insert({ email: "test@email.com" });
    const newProject = {
      user_id: 1,
      project_title: "TestProject"
    };
    const newUserExtra = await userExtrasModel.insert("projects", newProject);
    expect(newUserExtra.project_title).toBe(newProject.project_title);
  });

  it("should insert and return provided user extra 'experience'", async () => {
    await db("users").insert({ email: "test@email.com" });
    const newExperience = {
      user_id: 1,
      job_title: "TestDeveloper"
    };
    const newExperienceFull = {
      id: 1,
      user_id: 1,
      job_title: "TestDeveloper",
      company_name: null,
      job_dates: null,
      job_description: null
    };

    const newUserExtra = await userExtrasModel.insert(
      "experience",
      newExperience
    );
    expect(newUserExtra).toEqual(newExperienceFull);
  });

  it("should insert and return provided user extra 'education'", async () => {
    await db("users").insert({ email: "test@email.com" });
    const newEducation = {
      user_id: 1,
      school: "TestDeveloperAcademy"
    };
    const newEducationFull = {
      id: 1,
      user_id: 1,
      school: "TestDeveloperAcademy",
      school_dates: null,
      field_of_study: null
    };

    const newUserExtra = await userExtrasModel.insert(
      "education",
      newEducation
    );
    expect(newUserExtra).toEqual(newEducationFull);
  });

  it("should insert and return provided user extra 'projects'", async () => {
    await db("users").insert({ email: "test@email.com" });
    const newProject = {
      user_id: 1,
      project_title: "TestProject"
    };
    const newProjectFull = {
      id: 1,
      user_id: 1,
      project_title: "TestProject",
      link: null,
      project_description: null,
      project_img: null
    };

    const newUserExtra = await userExtrasModel.insert("projects", newProject);
    expect(newUserExtra).toEqual(newProjectFull);
  });
});
