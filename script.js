function copyIP() {
      navigator.clipboard.writeText("play.xyrealn.com");
      alert("Server IP copied: play.xyrealn.com");

    }
//server status
async function getServerStatus() {
  const statusElement = document.getElementById('server-status');

  try {
    const response = await fetch('https://api.mcsrvstat.us/2/play.xyrealn.com');
    const data = await response.json();
