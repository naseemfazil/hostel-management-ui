import React from "react";
import * as XLSX from "xlsx";

const ExportToExcel = ({data}) => {
  // Sample data
//   const data = [
//     { Name: "John Doe", Age: 25, City: "New York" },
//     { Name: "Jane Smith", Age: 30, City: "Los Angeles" },
//     { Name: "Sam Wilson", Age: 22, City: "Chicago" },
//   ];

  const handleDownload = () => {
    // Convert JSON data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate a file and trigger download
    XLSX.writeFile(workbook, "Data.xlsx");
  };

  return (
    <div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default ExportToExcel;
