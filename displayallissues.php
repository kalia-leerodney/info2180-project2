<?php 
    require_once "dbconfig.php";
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $allissues = $conn->query("SELECT * FROM Issues");
    $allissuesfinal = $allissues->fetchAll(PDO::FETCH_ASSOC);

    
?>

<html>

<table id="dashboardtable">
    <tr>
        <th> Title </th>
        <th> Type </th>
        <th> Status </th>
        <th> Assigned To </th>
        <th> Created </th>
    </tr>

    <?php foreach ($allissuesfinal as $issue):
    $assign=$issue['assigned_to'];
    $findname=$conn->query("SELECT firstname,lastname FROM Users WHERE id='$assign'");
    $name= $findname->fetch(PDO::FETCH_ASSOC);
        ?>
        <tr>
        <td><?php echo "#".$issue['id']; ?><a onclick="displayFullIssue()" ><?php echo " ".$issue['title']; ?></a></td>
        <td><?php echo $issue['_type']; ?></td>
        <td><?php echo $issue['_status']; ?></td>
        <td><?php echo $name['firstname']." ".$name['lastname']; ?></td>
        <td><?php echo $issue['created']; ?></td>
        </tr>
        
    <?php endforeach; ?>    
</table>

</html>
