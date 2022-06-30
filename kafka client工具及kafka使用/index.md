1、添加集群

kaf config add-cluster cluster_name --brokers broker_host：port

2、选择集群

kaf config use-cluster cluster_name

3、创建topic

kaf topic create topic_name -p 5 (p means partitions)

4、发送topic

echo -n "hello world" | kaf produce topic_name

5、消费kafka

kaf consume group_name -g group_name
6、查看topic相关信息

kaf topic describe topic_name

7、查看group消费信息

kaf group describe group_name

8、重置消费offset


kaf group commit group_name -t topic_name  --all-partitions -o latest --noconfirm (--all-partitions所有分区，-o 偏移量）

9、选择集群

kaf config select-cluster



10、消费消息

kaf consume topic_name

11、查询消息

kaf query topic_name

12、查看集群节点

kaf node ls