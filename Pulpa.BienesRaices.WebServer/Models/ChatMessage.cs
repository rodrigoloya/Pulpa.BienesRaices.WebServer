namespace Pulpa.BienesRaices.WebServer.Models;

public class ChatMessage
{
    public string Content { get; set; } = "";
    public bool IsUser { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.Now;
}
