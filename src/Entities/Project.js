/**
 * Project entity representing a portfolio project
 */
export class Project {
  /**
   * Fetch a list of projects with optional sorting
   * @param {string} sortOrder - Sort order (e.g., "-created_date")
   * @param {number} limit - Optional limit of records to return
   * @returns {Promise<Array>} - Promise resolving to array of projects
   */
  static async list(sortOrder = "-created_date", limit = null) {
    // Mock data based on your schema
    const projects = [
      {
        id: 1,
        title: "3D Map",
        description: "An interactive 3D game with physics and collision detection.",
        category: "game",
        image_url: "./3dMap.png",
        project_url: "https://shaharfullstack.github.io/UFOGame/",
        technologies: ["Three.js", "WebGL", "JavaScript"],
        featured: true
      },
      {
        id: 2,
        title: "Cryptonite",
        description: "A cryptocurrency portfolio tracker and news aggregator.",
        category: "web",
        image_url: "Cryptonite.png",
        project_url: "https://shaharfullstack.github.io/cryptoProject/",
        technologies: ["JavaScript", "HTML5", "CSS3", "API"],
        featured: true
      },
      {
        id: 3,
        title: "Vacations Website",
        description: "A full-stack vacation management system with user authentication, favorites, and admin dashboard.",
        category: "web",
        image_url: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&q=80",
        project_url: "https://github.com/ShaharFullStack/vacation-management",
        technologies: ["Docker", "React", "Node.js", "MySQL", "JWT", "Redux"],
        featured: true
      },
      {
        id: 4,
                title: "GrabNThrow",
        description: "A simple example of a 3d hand tracking game using Three.js & Cannon.js.",
        category: "game",
        image_url: "./GrabNThrow.png",
        project_url: "https://shaharfullstack.github.io/GrabNthrow",
        technologies: ["MediaPipe", "Three.js", "JavaScript", "WebGL"],
        featured: true
      },
      {
        id: 5,
        title: "GuiTab",
        description: "A Web scraping tool to find, display and play guitar tabs for Guitar Pro files (.gp*).",
        category: "tool",
        image_url: "./GuiTab.png",
        project_url: "https://drive.google.com/file/d/1A8Ifpv-LHKC-ZB2iy0zcjeaFX_Qlyqf5/preview",
        technologies: ["Docker", "React", "Puppeteer", "Typescript", "Alphatab"],
        featured: true
      },
      {
        id: 6,
        title: "2d Balloon Jumper",
        description: "A 2D game where players control a balloon to avoid obstacles and collect items.",
        category: "game",
        image_url: "https://github.com/ShaharFullStack/BalloonGame/raw/main/assets/images/screenShot.png",
        project_url: "https://shaharfullstack.github.io/BalloonGame/",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        featured: true
      },
      {
        id: 7,
                title: "My Resume Website",
        description: "My resume in English and Hebrew with some easter eggs (try the skills) and a pdf export.",
        category: "web",
        image_url: "./Resume.png",
        project_url: "https://shaharfullstack.github.io/ShaharResume/",
        technologies: ["JavaScript", "HTML5", "CSS3", "Three.js"],
        featured: true
      },
      {
        id: 8,
        title: "UFO Tower",
        description: "A 3D game where players control a UFO to grab and stack cubes.",
        category: "game",
        image_url: "./UFOGame.png",
        project_url: "https://shaharfullstack.github.io/UFOcubeTower/",
        technologies: ["MediaPipe", "Three.js", "JavaScript", "WebGL"],
        featured: true
      },
      {
        id: 9,
        title: "Balloon Flighter",
        description: "A 3D baloon shooting flight simulator single and multiplayer game built with Three.js.",
        category: "game",
        image_url: "./BalloonFlighter.png",
        project_url: "https://shaharfullstack.github.io/3DFlightSimulator",
        technologies: ["Three.js", "JavaScript", "WebGL"],
        featured: true

      },
      {
        id: 10,
        title: "HandSynth",
        description: "An innovative musical instrument controlled by hand gestures.",
        category: "music",
        image_url: "./background2.png",
        project_url: "https://shaharfullstack.github.io/HandSynthBetter/",
        technologies: ["MediaPipe", "Tone.js", "Three.js", "JavaScript"],
        featured: true

      },
      {
        id: 11,
        title: "Chord Blast",
        description: "Fist to play, unfist to blast.",
        category: "music",
        image_url: "./ChordBlast.png",
        project_url: "https://shaharfullstack.github.io/ChordBlast/",
        technologies: ["JavaScript", "MediaPipe",  "Web Audio API", "Three.js"],
        featured: true
      },
      {
        id: 12,
        title: "First Person Scorched Earth",
        description: "3D tank battle game, a three.js take on the good old classic game.",
        category: "game",
        image_url: "./ScorchedEarth3D.png",
        project_url: "https://shaharfullstack.github.io/tdscorchedearth/",
        technologies: ["JavaScript", "HTML5", "Three.js", "Cannon.js"],
        featured: true
      }
    ];

    let result = [...projects];

    // Apply sorting
    if (sortOrder) {
      const desc = sortOrder.startsWith("-");
      const field = desc ? sortOrder.substring(1) : sortOrder;
      result.sort((a, b) => {
        if (desc) {
          return a[field] < b[field] ? 1 : -1;
        }
        return a[field] > b[field] ? 1 : -1;
      });
    }

    // Apply limit
    if (limit) {
      result = result.slice(0, limit);
    }

    // Simulate async API call
    return new Promise(resolve => {
      setTimeout(() => resolve(result), 500);
    });
  }

  /**
   * Filter projects by criteria
   * @param {Object} filters - Filter criteria
   * @param {string} sortOrder - Sort order
   * @param {number} limit - Optional limit
   * @returns {Promise<Array>} - Promise resolving to array of filtered projects
   */
  static async filter(filters, sortOrder = "-created_date", limit = null) {
    const allProjects = await this.list(sortOrder);

    const filtered = allProjects.filter(project => {
      return Object.entries(filters).every(([key, value]) => {
        return project[key] === value;
      });
    });

    return limit ? filtered.slice(0, limit) : filtered;
  }
}
