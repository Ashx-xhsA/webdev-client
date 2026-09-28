export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Account</h5>

      <label htmlFor="wd-your-form-first-name">First name:</label>
      <input
        type="text"
        placeholder="Zhanyi"
        defaultValue="Zhanyi"
        id="wd-your-form-first-name"
      />
      <br />
      <label htmlFor="wd-your-form-last-name">Last name:</label>
      <input
        type="text"
        placeholder="Chen"
        defaultValue="Chen"
        id="wd-your-form-last-name"
      />
      <label htmlFor="wd-your-form-password">Password:</label>
      <input
        type="password"
        placeholder="password"
        id="wd-your-form-password"
      />
      <br />

      <h5>About</h5>
      <label htmlFor="wd-your-form-bio">Bio:</label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={40}
        rows={4}
        placeholder="SAMPLE: Zhanyi Chen is a student who enjoys web development."
        defaultValue="SAMPLE: Zhanyi Chen is a student who enjoys web development."
      />
      <br />

      <h5>Class standing</h5>
      <input
        type="radio"
        name="your-form-standing"
        id="wd-your-form-freshman"
      />
      <label htmlFor="wd-your-form-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="your-form-standing"
        id="wd-your-form-sophomore"
      />
      <label htmlFor="wd-your-form-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="your-form-standing"
        id="wd-your-form-junior"
        defaultChecked
      />
      <label htmlFor="wd-your-form-junior">Junior</label>
      <br />
      <input type="radio" name="your-form-standing" id="wd-your-form-senior" />
      <label htmlFor="wd-your-form-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-form-standing"
        id="wd-your-form-graduate"
      />
      <label htmlFor="wd-your-form-graduate">Graduate</label>
      <br />

      <h5>Enrollment status</h5>
      <input
        type="radio"
        name="your-form-enrollment"
        id="wd-your-form-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-form-full-time">Full-time</label>
      <br />
      <input
        type="radio"
        name="your-form-enrollment"
        id="wd-your-form-part-time"
      />
      <label htmlFor="wd-your-form-part-time">Part-time</label>
      <br />

      <h5>Interests</h5>
      <input type="checkbox" id="wd-your-form-frontend" defaultChecked />
      <label htmlFor="wd-your-form-frontend">Frontend</label>
      <br />
      <input type="checkbox" id="wd-your-form-backend" />
      <label htmlFor="wd-your-form-backend">Backend</label>
      <br />
      <input type="checkbox" id="wd-your-form-databases" defaultChecked />
      <label htmlFor="wd-your-form-databases">Databases</label>
      <br />
      <input type="checkbox" id="wd-your-form-design" />
      <label htmlFor="wd-your-form-design">UI/UX Design</label>
      <br />

      <h5>Courses</h5>
      <label htmlFor="wd-your-form-major">Major: </label>
      <br />
      <select id="wd-your-form-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CYBER">Cybersecurity</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-your-form-topics">Topics to deepen this term: </label>
      <br />
      <select
        multiple
        id="wd-your-form-topics"
        defaultValue={['REACT', 'NODE']}
      >
        <option value="HTML_CSS">HTML &amp; CSS</option>
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGODB">MongoDB</option>
      </select>
      <br />

      <h5>Details</h5>
      <label htmlFor="wd-your-form-email">School email: </label>
      <input
        type="email"
        placeholder="Zhanyi@university.edu"
        id="wd-your-form-email"
      />
      <br />
      <label htmlFor="wd-your-form-grad-year">Graduation year: </label>
      <input
        type="number"
        defaultValue="2028"
        min={2024}
        max={2032}
        id="wd-your-form-grad-year"
      />
      <br />
      <label htmlFor="wd-your-form-dob">Date of birth: </label>
      <input
        type="date"
        defaultValue="2004-01-01"
        min="1900-01-01"
        max="2025-12-31"
        id="wd-your-form-dob"
      />
      <br />
      <label htmlFor="wd-your-form-excitement">
        Excitement about the course (0-10):{' '}
      </label>
      <input
        type="range"
        defaultValue="8"
        min="0"
        max="10"
        id="wd-your-form-excitement"
      />
      <br />

      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
