# How to Run the Portfolio Website

Now that we've set up the correct file structure, follow these steps to run the website:

## Step 1: Open a command prompt

Press `Win + R`, type `cmd`, and press Enter.

## Step 2: Navigate to the project directory

```
cd c:\Codes\port\portfolio
```

## Step 3: Start the development server

```
npm start
```

The website should now open automatically in your default browser at http://localhost:3000.

> **Note**: We fixed the Tailwind CSS configuration to avoid scanning the node_modules directory, which was causing performance issues.

## What Changed

We fixed the file structure to match React's expectations:

1. Created a `src` directory and moved all relevant files into it
2. Fixed import paths in components to match the new structure
3. Made sure Tailwind CSS is configured correctly

React projects built with Create React App (which this appears to be) expect the main entry point (`index.js`) to be inside a `src` directory. The structure we've set up follows the standard React conventions.

## Troubleshooting

If you encounter any issues:

1. **Module not found errors**: Check that the import paths match the file locations
2. **Styling issues**: Make sure the Tailwind CSS configuration is pointing to the correct directories
3. **React errors**: Check the browser console for specific error messages

### Common Import Errors

If you see errors like:
```
Module not found: Error: Can't resolve '@/entities/Project'
```

This is typically due to incorrect import paths. Our fixes included:

1. Changing `@/entities/Project` to `../Entities/Project`
2. Updating component paths to use the correct capitalization (`Components` vs `components`)
3. Adding file extensions where needed, like `.js` at the end of imports

### File Structure Note

The project follows this structure:
- Source code is in the `/src` directory
- Component files use capital letters for folders: `/Components` and `/Entities`
- Be careful with capitalization as Windows might not show errors, but deployment will fail

Enjoy your portfolio website!
