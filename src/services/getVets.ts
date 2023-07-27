// import path from "path";
// import fsPromises from "fs/promises";

// export async function getVets() {
//   // Get the path of the json file
//   const filePath = path.join(process.cwd(), "public/veterinary.json");
//   // Read the json file
//    // Read the JSON data from the file
//    fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading JSON file:', err);
//       return res.status(500).json({ message: 'Error reading JSON file' });
//     }

//     // Parse the JSON data
//     const jsonData = JSON.parse(data);

//     // Send the JSON data in the response
//     res.status(200).json(jsonData);
//   });
//   return objectData;
// }
