// Example template data (you can replace this with a database or API)
const templates = [
    {
      name: "Obby Template",
      description: "A basic obby game template.",
      code: `local part = Instance.new("Part")
  part.Parent = workspace
  part.Position = Vector3.new(0, 10, 0)
  part.Anchored = true
  part.Size = Vector3.new(10, 1, 10)`
    },
    {
      name: "Simulator Template",
      description: "A simulator game template.",
      code: `local player = game.Players.LocalPlayer
  local leaderstats = Instance.new("Folder")
  leaderstats.Name = "leaderstats"
  leaderstats.Parent = player
  
  local coins = Instance.new("IntValue")
  coins.Name = "Coins"
  coins.Value = 0
  coins.Parent = leaderstats`
    },
    {
      name: "RPG Template",
      description: "An RPG game template.",
      code: `local tool = Instance.new("Tool")
  tool.Name = "Sword"
  tool.Parent = game.Players.LocalPlayer.Backpack
  
  tool.Activated:Connect(function()
    print("Sword used!")
  end)`
    },
    {
      name: "Teleport Template",
      description: "Teleport players to a specific location.",
      code: `local teleportPart = Instance.new("Part")
  teleportPart.Position = Vector3.new(0, 10, 0)
  teleportPart.Anchored = true
  teleportPart.Parent = workspace
  
  teleportPart.Touched:Connect(function(hit)
    local player = game.Players:GetPlayerFromCharacter(hit.Parent)
    if player then
      player.Character:MoveTo(Vector3.new(50, 10, 0))
    end
  end)`
    },
    {
      name: "Click Detector Template",
      description: "Detect clicks on a part.",
      code: `local part = Instance.new("Part")
  part.Parent = workspace
  part.Position = Vector3.new(0, 10, 0)
  part.Anchored = true
  
  local clickDetector = Instance.new("ClickDetector")
  clickDetector.Parent = part
  
  clickDetector.MouseClick:Connect(function(player)
    print(player.Name .. " clicked the part!")
  end)`
    }
  ];
  
  // Function to display templates
  function displayTemplates() {
    const templateSection = document.getElementById('templates');
    templateSection.innerHTML = ''; // Clear existing templates
  
    templates.forEach(template => {
      const templateCard = document.createElement('div');
      templateCard.className = 'template-card';
  
      templateCard.innerHTML = `
        <h3>${template.name}</h3>
        <p>${template.description}</p>
        <button onclick="copyCode(\`${template.code}\`)">Copy Code</button>
      `;
  
      templateSection.appendChild(templateCard);
    });
  }
  
  // Function to copy code to clipboard
  function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  }
  
  // Initial display of templates
  displayTemplates();